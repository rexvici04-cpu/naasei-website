# NaaSei Personal Website

The official NaaSei personal website, built with Next.js and prepared for
deployment on Vercel.

## What is included

- Complete responsive landing page
- NaaSei brand artwork and Adinkrahene identity
- Marcellus and Plus Jakarta Sans brand fonts
- Optimised portrait and project imagery
- Email and LinkedIn contact links
- Metadata and favicon

## Deploy manually with GitHub and Vercel

### 1. Upload to GitHub

1. Extract `naasei-website-vercel.zip`.
2. Sign in to GitHub and create a new repository named `naasei-website`.
3. Set the repository to **Private**.
4. Open the empty repository and choose **Add file → Upload files**.
5. Upload everything inside the extracted `naasei-website` folder.
   Do not upload the ZIP itself or add an extra folder level.
6. Commit the files to the `main` branch.

### 2. Deploy with Vercel

1. Sign in to Vercel.
2. Choose **Add New → Project**.
3. Connect GitHub if prompted.
4. Import the `naasei-website` repository.
5. Vercel should detect **Next.js** automatically.
6. Leave Framework Preset, Root Directory, Build Command and Output Directory
   at their default values.
7. No environment variables are required.
8. Select **Deploy**.

### 3. Add a custom domain later

In Vercel, open the project and go to **Settings → Domains**. Add the domain
you own and copy the DNS records Vercel gives you into your domain provider's
DNS settings.

## Local preview (optional)

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Updating the site

Edit the files in GitHub or on your computer and commit the changes to `main`.
Vercel will automatically build and publish the new version.

## Main content locations

- Page content: `app/page.tsx`
- Styling and responsive rules: `app/globals.css`
- Site title and description: `app/layout.tsx`
- Images, logos, icons and fonts: `public/assets`
