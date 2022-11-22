import { createStore } from "solid-js/store";
import { useForm } from "@lib/formValidation";

const ErrorMessage = (props) => <span>{props.error}</span>;

export default function FooterForm() {
  const { validate, formSubmit, errors } = useForm({
    errorClass: "error-input"
  });
  const [fields, setFields] = createStore({
    name: "",
    email_address: "",
    accept_terms: false
  });
  const [formStatus, setFormStatus] = createStore({
    submitting: false,
    success: false, 
    error: false
  });
  const fn = async (form) => {
    try {
      setFormStatus({submitting: true, success: false, error: false});

      const subscribingUser = {
        email_address: fields.email_address,
        status: 'subscribed',
        merge_fields: {
          FNAME: fields.name,
        },
      }
      const res = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscribingUser),
      })
      const data = await res.json();
      console.log({data});
      if (data.status === 400) {
        setFormStatus({submitting: false, success: false, error: true});
      } else {
        setFormStatus({submitting: false, success: true, error: false});
      }
      setTimeout(() => {
        setFormStatus({submitting: false, success: false, error: false});
      }, 5000);
    } catch(err) {
      setFormStatus({submitting: false, success: false, error: true});
      setTimeout(() => {
        setFormStatus({submitting: false, success: false, error: false});
      }, 5000);
    }
  };

  return (
    <>
      {formStatus.success === false && formStatus.error === false  && (
        <form use:formSubmit={fn} class='flex flex-row w-full pl-5'>
          <div class='flex flex-col w-4/5'>
            <div class='flex flex-row w-full'>
              <div class='flex flex-col w-full mr-4'>
                <input
                  name='name'
                  class='flex h-14 w-full p-4 bg-gray-200 text-indigo-800 text-lg font-light'
                  type='text'
                  placeholder='Your name'
                  required
                  use:validate
                  onInput={(e) => setFields("name", e.target.value)}
                />
                <div class='w-full text-sm pt-1 pr-3 text-red-600'>
                  {errors.name && <ErrorMessage error={errors.name} />}
                </div>
              </div>

              <div class='flex flex-col w-full mr-4'>
                <input
                  name='email_address'
                  class='flex h-14 w-full p-4 bg-gray-200 text-indigo-800 text-lg font-light'
                  type='email'
                  placeholder='Your email address'
                  required
                  use:validate
                  onInput={(e) => setFields("email_address", e.target.value)}
                />
                <div class='w-full text-sm pt-1 pr-3 text-red-600'>
                  {errors.email_address && <ErrorMessage error={errors.email_address} />}
                </div>
              </div>
            </div>

            <div class='flex items-center pt-4'>
              <input
                id="accept_terms"
                name='accept_terms'
                type='checkbox'
                required
                use:validate
                onInput={(e) => setFields("accept_terms", fields.accept_terms === 'on' ? '' : 'on')}
              />
              <label for='accept_terms' class='required pl-4'>
                I have read and agree to the terms of the{' '}
                <a
                  class='pb-1 border-b border-solid border-0 border-transparent hover:pb-2 hover:border-b hover:border-white transition duration-300 ease-in-out cursor-pointer'
                  href='/about/privacy-policy'
                >
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a
                  class='pb-1 border-b border-solid border-0 border-transparent hover:pb-2 hover:border-b hover:border-white transition duration-300 ease-in-out cursor-pointer'
                  href='/about/terms-of-use'
                >
                  Terms of Use
                </a>
                <div class='w-full text-sm pt-1 pr-3 text-red-600'>
                  {errors.accept_terms && <ErrorMessage error={errors.accept_terms} />}
                </div>
              </label>
            </div>
          </div>

          <div class='flex w-1/5'>
            <button
              class='h-14 w-full rounded-full bg-indigo-400 hover:bg-indigo-500 transition duration-300 ease-in-out'
              type='submit'
            >
              {formStatus.submitting === true ? (
                "Subscribing..."
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>
      )}
      {formStatus.success === true && (
        <div
          class="flex flex-row w-full text-xl font-light pl-5"
        >
          Congratulations, you have successfully subscribed to Floreer Thinking
        </div>
      )}
      {formStatus.error === true && (
        <div
          class="flex flex-row w-full text-xl font-light pl-5"
        >
          There was an error subscribing to Floreer Thinking, please wait a 
          few moments for the form to reload and try again
        </div>
      )}
    </>
  )
};