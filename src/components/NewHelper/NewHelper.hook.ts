import * as yup from "yup";
import { useFormik } from "formik";
import { TypeItem } from "./NewHelper.types";
import { HelperItem, Type } from "../Main/Main.types";
import { period } from "../Main/Main.constants";

interface NewHelperHookProps {
  push: (data: HelperItem) => void;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().required(),
  time: yup.object({
    time: yup.number().required(),
    minute: yup.number().required(),
  }),
  percent: yup.number(),
});

const useNewHelper = ({ push }: NewHelperHookProps) => {
  const initialValues: HelperItem = {
    name: "",
    type: Type.Base,
    ...period,
  };

  const typeList: TypeItem[] = [
    {
      name: "Base",
      value: Type.Base,
    },
    {
      name: "General",
      value: Type.General,
    },
  ];

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    setFieldValue,
    touched,
    resetForm,
  } = useFormik<HelperItem>({
    initialValues,
    onSubmit: (values) => {
      push(values);
      resetForm();
    },
    validationSchema,
  });

  return {
    typeList,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    setFieldValue,
    touched,
  };
};

export default useNewHelper;
