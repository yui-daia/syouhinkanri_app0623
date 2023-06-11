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
export declare type NewForm5InputValues = {
    name?: string;
    image_url?: string;
    bounty?: string;
    birthday?: string;
};
export declare type NewForm5ValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    bounty?: ValidationFunction<string>;
    birthday?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm5OverridesProps = {
    NewForm5Grid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    bounty?: PrimitiveOverrideProps<TextFieldProps>;
    birthday?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm5Props = React.PropsWithChildren<{
    overrides?: NewForm5OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm5InputValues) => NewForm5InputValues;
    onSuccess?: (fields: NewForm5InputValues) => void;
    onError?: (fields: NewForm5InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm5InputValues) => NewForm5InputValues;
    onValidate?: NewForm5ValidationValues;
} & React.CSSProperties>;
export default function NewForm5(props: NewForm5Props): React.ReactElement;
