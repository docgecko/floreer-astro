import mailchimp from '@mailchimp/mailchimp_marketing';
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {

  const { email_address, merge_fields } = await request.json();
  console.log(email_address, merge_fields);

  mailchimp.setConfig({
    apiKey: import.meta.env.PUBLIC_MAILCHIMP_API_KEY,
    server: import.meta.env.PUBLIC_MAILCHIMP_SERVER_PREFIX,
  });

  try {
    const response = await mailchimp.lists.addListMember(
      import.meta.env.PUBLIC_MAILCHIMP_AUDIENCE_ID, {
        email_address,
        merge_fields,
        status: 'subscribed',
      }
    );
    return {
      status: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      status: 400,
      body: JSON.stringify(error),
    };
  }
}