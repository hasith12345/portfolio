# Resend Email Setup Instructions

This portfolio website now uses [Resend](https://resend.com) for contact form email functionality.

## Setup Steps

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it will only be shown once!)

### 3. Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 4. Verify Your Domain (Optional but Recommended)
The default setup uses Resend's test domain (`onboarding@resend.dev`), which works but has limitations:

**For Production:**
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `yourdomain.com`)
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually takes a few minutes)
6. Update the `from` field in `app/api/send-email/route.ts`:
   ```typescript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

### 5. Test the Contact Form
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to your contact section
3. Fill out the form and submit
4. Check your email (hasithgamlath327@gmail.com) for the message

### 6. Update Recipient Email (if needed)
To change where contact form emails are sent:
1. Open `app/api/send-email/route.ts`
2. Update the `to` field:
   ```typescript
   to: ['your-email@example.com'],
   ```

## Features

✅ **Modern Email API**: Uses Resend instead of EmailJS  
✅ **Beautiful Email Templates**: HTML formatted emails with styling  
✅ **Reply-To Support**: Emails include the sender's email as reply-to  
✅ **Error Handling**: Proper error messages and status feedback  
✅ **Loading States**: Visual feedback during email sending  
✅ **Success Messages**: Auto-clearing success notifications  

## Resend Free Tier
- 100 emails per day
- 3,000 emails per month
- Perfect for portfolio contact forms!

## Troubleshooting

### Email not sending?
1. Check your API key is correct in `.env.local`
2. Restart your dev server after adding the API key
3. Check the browser console for error messages
4. Verify your Resend account is active

### Emails going to spam?
1. Verify your domain in Resend
2. Set up SPF, DKIM, and DMARC records
3. Use your verified domain in the `from` field

### Rate limit errors?
The free tier has limits. For higher volume:
1. Upgrade your Resend plan
2. Or add rate limiting to your API route

## Support

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference/emails/send-email)
- [Resend Discord](https://discord.gg/resend)
