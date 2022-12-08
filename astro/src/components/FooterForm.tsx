import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInput {
  name: string;
  email_address: string;
  accept_terms: boolean;
}

const schema = yup.object({
  name: yup.string().required("Please provide your name"),
  email_address: yup.string().email("Please provide a valid email address").required("Please provide your email address"),
  accept_terms: yup.boolean().oneOf([true], 'Please accept the terms and conditions').required(),
}).required();

const ErrorMessage = ({error}:{error:any}) => <span>{error}</span>;

export default function FooterForm() {
  const { register, handleSubmit, formState: {
    errors,
    isValid,
    isSubmitting,
  }} = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const subscribingUser = {
      email_address: data.email_address,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.name,
      },
    }
    const res = await fetch('/api/mailchimp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscribingUser),
    })
    const json = await res.json();
    console.log({ json });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-row w-full pl-5'>
        <div className='flex flex-col w-4/5'>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-full mr-4'>
              <input
                className='flex h-14 w-full p-4 bg-gray-200 text-indigo-800 text-lg font-light'
                placeholder='Your name'
                {...register("name")}
              />
              <div className='w-full text-sm pt-1 pr-3 text-red-600'>
                {errors.name && <ErrorMessage error={errors.name?.message} />}
              </div>
            </div>

            <div className='flex flex-col w-full mr-4'>
              <input
                className='flex h-14 w-full p-4 bg-gray-200 text-indigo-800 text-lg font-light'
                placeholder='Your email address'
                {...register("email_address")}
              />
              <div className='w-full text-sm pt-1 pr-3 text-red-600'>
                {errors.email_address && <ErrorMessage error={errors.email_address?.message} />}
              </div>
            </div>
          </div>

          <div className='pt-4'>
            <div className="flex flex-row">
              <input
                className="flex"
                id="accept_terms"
                type='checkbox'
                {...register("accept_terms")}
              />
              <label htmlFor='accept_terms' className="flex flex-row w-full">
                <p className="pl-4 w-auto">
                  I have read and agree to the terms of the{' '}
                  <a
                    className='pb-1 border-b border-solid border-0 border-transparent hover:pb-2 hover:border-b hover:border-white transition duration-300 ease-in-out cursor-pointer'
                    href='/about/privacy-policy'
                  >
                    Privacy Policy
                  </a>
                  {' '}and{' '}
                  <a
                    className='pb-1 border-b border-solid border-0 border-transparent hover:pb-2 hover:border-b hover:border-white transition duration-300 ease-in-out cursor-pointer'
                    href='/about/terms-of-use'
                  >
                    Terms of Use
                  </a>
                </p>
              </label>
            </div>
            <div className='w-full text-sm pt-1 pl-[27px] pr-3 text-red-600'>
              {errors.accept_terms && <ErrorMessage error={errors.accept_terms?.message} />}
            </div>
          </div>
        </div>

        <div className='flex w-1/5'>
          <button
            className={`h-14 w-full rounded-full ${!isValid ? 'bg-indigo-300 hober:bg-indigo-300' : 'bg-indigo-400 hover:bg-indigo-500'} transition duration-300 ease-in-out`}
            type='submit'
            disabled={!isValid}
          >
            {isSubmitting === true ? (
              "Subscribing..."
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>

      {/* {formStatus.success === true && (
        <div
          className="flex flex-row w-full text-xl font-light pl-5"
        >
          Congratulations, you have successfully subscribed to Floreer Thinking
        </div>
      )}
      {formStatus.error === true && (
        <div
          className="flex flex-row w-full text-xl font-light pl-5"
        >
          There was an error subscribing to Floreer Thinking, please wait a
          few moments for the form to reload and try again
        </div>
      )} */}
    </>
  )
};