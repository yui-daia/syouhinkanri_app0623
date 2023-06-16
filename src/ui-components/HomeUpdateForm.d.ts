/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomeUpdateFormInputValues = {
    name?: string;
    image_url?: string;
    bounty?: string;
    birthday?: string;
};
export declare type HomeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    bounty?: ValidationFunction<string>;
    birthday?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeUpdateFormOverridesProps = {
    HomeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    bounty?: PrimitiveOverrideProps<TextFieldProps>;
    birthday?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeUpdateFormProps = React.PropsWithChildren<{
    overrides?: HomeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    home?: Home;
    onSubmit?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onSuccess?: (fields: HomeUpdateFormInputValues) => void;
    onError?: (fields: HomeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onValidate?: HomeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HomeUpdateForm(props: HomeUpdateFormProps): React.ReactElement;
