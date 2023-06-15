/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, PasswordFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserNameInputValues = {
    address?: string;
    image_url?: string;
    price?: number;
};
export declare type UserNameValidationValues = {
    address?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserNameOverridesProps = {
    UserNameGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    image_url?: PrimitiveOverrideProps<PasswordFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserNameProps = React.PropsWithChildren<{
    overrides?: UserNameOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserNameInputValues) => UserNameInputValues;
    onSuccess?: (fields: UserNameInputValues) => void;
    onError?: (fields: UserNameInputValues, errorMessage: string) => void;
    onChange?: (fields: UserNameInputValues) => UserNameInputValues;
    onValidate?: UserNameValidationValues;
} & React.CSSProperties>;
export default function UserName(props: UserNameProps): React.ReactElement;
