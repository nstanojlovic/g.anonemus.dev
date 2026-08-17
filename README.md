# Anonemus

Personal portfolio of [Nemanja Stanojlović](https://www.linkedin.com/in/nemanja-stanojlovic/) — a Next.js site covering selected Laravel and WordPress work.

## Requirements

- Node.js 20.9 or newer
- [pnpm](https://pnpm.io/installation) 9 or newer

## Local development

```bash
git clone <your-repo-url> anonemus
cd anonemus
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

| Command       | What it does                                      |
| ------------- | ------------------------------------------------- |
| `pnpm dev`    | Start the development server with hot reload      |
| `pnpm build`  | Create a production build                         |
| `pnpm start`  | Serve the production build (run `build` first)    |

Site copy lives in `lib/portfolio-data.ts`. Edit that file to update profile, projects, experience, and contact details.

## Deploy on Laravel Forge

This is a Node.js app, not a PHP site. Forge still works well if you treat it as a Next.js process behind Nginx.

### 1. Server

On the Forge server, install **Node.js 20+** (Server → Packages, or Node via NVM for the `forge` user) and make `pnpm` available to that user:

```bash
npm install -g pnpm
```

Confirm both binaries resolve as `forge`:

```bash
node -v
pnpm -v
```

### 2. Create the site

1. Add a new site for your domain.
2. Set **Project type** to **Static HTML / Nuxt.js / Next.js**.
3. Leave **Web Directory** as `/`.
4. Do **not** install Composer dependencies.
5. Connect the Git repository and pick the branch you deploy from (`main` is typical).

Forge Next.js sites use zero-downtime releases (`releases/` + `current`). Point the daemon at `current` if that is how the site was created.

### 3. Nginx reverse proxy

Edit the site Nginx config and replace the PHP `location /` block with a proxy to the Next.js process:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

Reload Nginx from Forge after saving.

If another site on the same server already uses port `3000`, pick a free port (for example `3001`) and use it in Nginx, the daemon, and `pnpm start -- -p 3001`.

### 4. Deployment script

Use a script that installs dependencies and builds, but does **not** run `pnpm start` (that would hang the deploy).

**Zero-downtime site (Forge Next.js / default for new sites):**

```bash
$CREATE_RELEASE()

cd $FORGE_RELEASE_DIRECTORY

pnpm install --frozen-lockfile
pnpm build

$ACTIVATE_RELEASE()

# Replace 12345 with your daemon ID from Server → Daemons
sudo supervisorctl restart daemon-12345:*
```

**Classic site (code in `/home/forge/your-domain.com`):**

```bash
cd /home/forge/your-domain.com
git pull origin $FORGE_SITE_BRANCH

pnpm install --frozen-lockfile
pnpm build

sudo supervisorctl restart daemon-12345:*
```

Enable **Quick Deploy** if you want Forge to ship every push to the selected branch.

### 5. Daemon

Create a daemon so Next.js stays running after deploy:

| Field     | Value                                              |
| --------- | -------------------------------------------------- |
| Command   | `pnpm start`                                       |
| Directory | `/home/forge/your-domain.com/current` (or the site root if you are not using releases) |
| User      | `forge`                                            |

After the first successful deploy, the site should respond on your domain. If you get `502 Bad Gateway`, the daemon is not running or Nginx is proxying the wrong port.

### 6. DNS and SSL

Point an `A` record for the domain (and `www` if you use it) at the server IP. Then issue a Let's Encrypt certificate from the site **SSL** tab.

## License

Private portfolio project. All rights reserved.
