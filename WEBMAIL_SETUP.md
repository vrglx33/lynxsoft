# LynxSoft — Custom Domain Email Setup (Free)

## Best Free Option: Cloudflare Email Routing

**Cloudflare Email Routing** is 100% free with no subscription, no credit card, and no mailbox limits. It routes emails sent to `@lynxsoft.com.co` to any existing inbox (your personal Gmail, etc.). For sending FROM the custom domain, configure Gmail's "Send mail as" feature.

## Step 1 — Register `lynxsoft.com.co` & Use Cloudflare DNS

Register the domain at [Namecheap](https://namecheap.com) or [Cloudflare Registrar](https://cloudflare.com/products/registrar/) (cheapest, ~$9/yr for .dev).

Then, in your Cloudflare dashboard, set your domain's nameservers to Cloudflare. All DNS management happens here.

## Step 2 — Enable Cloudflare Email Routing

1. In Cloudflare dashboard → your domain → **Email** → **Email Routing**
2. Click **Enable Email Routing** — Cloudflare adds MX records automatically
3. Add a **routing rule**:
   - **From**: `hello@lynxsoft.com.co`
   - **To**: `your.personal@gmail.com` (or any inbox)
4. Repeat for: `alejandro@lynxsoft.com.co`, `contact@lynxsoft.com.co`, etc.
5. Add a **catch-all** rule to forward any address to your Gmail

> That's it for **receiving** email. No payment, no account creation beyond Cloudflare.

## Step 3 — Set Up Sending FROM `@lynxsoft.com.co` via Gmail (Free)

So replies show as `hello@lynxsoft.com.co`, not your personal Gmail:

1. In Gmail → **Settings** → **Accounts and Import** → **Send mail as** → **Add another email address**
2. Enter name `LynxSoft` and address `hello@lynxsoft.com.co`
3. Use Gmail SMTP: `smtp.gmail.com`, port `587`, your Gmail login + an **App Password**
4. Verify with the code Gmail sends to your Cloudflare-routed inbox
5. Set as default reply address if desired

## Step 4 — Connect Vercel Domain

In Vercel project settings → **Domains** → add `lynxsoft.com.co`.
Vercel will provide **A** and **CNAME** records. Add them in Cloudflare DNS (set proxy to **DNS only** / grey cloud for Vercel records).

## Summary

| Feature | Cloudflare Email Routing |
|---|---|
| Cost | **Free Forever** |
| Custom domain emails | ✅ Unlimited addresses |
| Receive in | Any existing inbox (Gmail, etc.) |
| Send FROM @lynxsoft.com.co | ✅ Via Gmail SMTP ("Send mail as") |
| Webmail UI | Your Gmail interface |
| Create/delete addresses | ✅ Cloudflare dashboard |
| Spam filtering | ✅ Built-in |

## Alternative: Zoho Mail Free Plan

If you prefer a dedicated webmail interface at `mail.zoho.com`:
- Sign up at [zoho.com/mail](https://zoho.com/mail) → select **Free Plan** (5 users, 5GB each)
- Add domain → follow DNS wizard → create mailboxes
- Access webmail at [mail.zoho.com](https://mail.zoho.com)

> ⚠️ Make sure to select the **"Mail Free"** plan, not a paid Workplace plan.
