"use client";

import React from 'react';
import { Button } from "@nextui-org/react";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.content) {
    errors.content = '* Required';
  } else if (values.content.length > 50) {
    errors.content = 'Must be 50 characters or less';
  }
  // VM - the length cap is arbitrary; just to demo that we've got two kinds of validation here

  return errors;
};

const ContentForm = ({content = '', onSubmitSendContent }) => {
  const formik = useFormik({
    initialValues: {
      content:content
    },
    validate,
    onSubmit: values => {
      onSubmitSendContent(values.content);
    },
  });
  return (
    <div className="flex flex-wrap w-full">
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <div className="w-full flex-wrap p-6">
          <input
            className="w-full h-12 p-4 border border-slate-50 rounded-lg"
            id="content"
            name="content"
            type="input"
            placeholder="Add Content Here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
          />
          {formik.touched.content && formik.errors.content ? (
            <div className="w-full text-red-700 text-sm pt-2">{formik.errors.content}</div>
          ) : null}
        </div>
        <div className="flex justify-end pb-4">
          <Button color="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContentForm;