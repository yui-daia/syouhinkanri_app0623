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
export declare type NewForm3InputValues = {
    name?: string;
    image_url?: string;
    bounty?: string;
    birthday?: string;
};
export declare type NewForm3ValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    bounty?: ValidationFunction<string>;
    birthday?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm3OverridesProps = {
    NewForm3Grid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    bounty?: PrimitiveOverrideProps<TextFieldProps>;
    birthday?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm3Props = React.PropsWithChildren<{
    overrides?: NewForm3OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm3InputValues) => NewForm3InputValues;
    onSuccess?: (fields: NewForm3InputValues) => void;
    onError?: (fields: NewForm3InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm3InputValues) => NewForm3InputValues;
    onValidate?: NewForm3ValidationValues;
} & React.CSSProperties>;
export default function NewForm3(props: NewForm3Props): React.ReactElement;
