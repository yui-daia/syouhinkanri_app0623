/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomeCreateFormInputValues = {
    languageofflower?: string;
    name?: string;
    img?: string;
};
export declare type HomeCreateFormValidationValues = {
    languageofflower?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCreateFormOverridesProps = {
    HomeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    languageofflower?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeCreateFormProps = React.PropsWithChildren<{
    overrides?: HomeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HomeCreateFormInputValues) => HomeCreateFormInputValues;
    onSuccess?: (fields: HomeCreateFormInputValues) => void;
    onError?: (fields: HomeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeCreateFormInputValues) => HomeCreateFormInputValues;
    onValidate?: HomeCreateFormValidationValues;
} & React.CSSProperties>;
export default function HomeCreateForm(props: HomeCreateFormProps): React.ReactElement;
