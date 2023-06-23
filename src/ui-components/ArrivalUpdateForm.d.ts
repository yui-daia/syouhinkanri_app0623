/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Arrival } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArrivalUpdateFormInputValues = {
    B_OrderNumber?: number;
    E_Date?: string;
    G_SupplierCode?: number;
    H_supplier?: string;
    L_ItemCode?: number;
    M_ItemName?: string;
    R_qaunty?: number;
    T_unit?: string;
    AB_detail1?: string;
    AC_detail2?: string;
};
export declare type ArrivalUpdateFormValidationValues = {
    B_OrderNumber?: ValidationFunction<number>;
    E_Date?: ValidationFunction<string>;
    G_SupplierCode?: ValidationFunction<number>;
    H_supplier?: ValidationFunction<string>;
    L_ItemCode?: ValidationFunction<number>;
    M_ItemName?: ValidationFunction<string>;
    R_qaunty?: ValidationFunction<number>;
    T_unit?: ValidationFunction<string>;
    AB_detail1?: ValidationFunction<string>;
    AC_detail2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArrivalUpdateFormOverridesProps = {
    ArrivalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    B_OrderNumber?: PrimitiveOverrideProps<TextFieldProps>;
    E_Date?: PrimitiveOverrideProps<TextFieldProps>;
    G_SupplierCode?: PrimitiveOverrideProps<TextFieldProps>;
    H_supplier?: PrimitiveOverrideProps<TextFieldProps>;
    L_ItemCode?: PrimitiveOverrideProps<TextFieldProps>;
    M_ItemName?: PrimitiveOverrideProps<TextFieldProps>;
    R_qaunty?: PrimitiveOverrideProps<TextFieldProps>;
    T_unit?: PrimitiveOverrideProps<TextFieldProps>;
    AB_detail1?: PrimitiveOverrideProps<TextFieldProps>;
    AC_detail2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArrivalUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArrivalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    arrival?: Arrival;
    onSubmit?: (fields: ArrivalUpdateFormInputValues) => ArrivalUpdateFormInputValues;
    onSuccess?: (fields: ArrivalUpdateFormInputValues) => void;
    onError?: (fields: ArrivalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArrivalUpdateFormInputValues) => ArrivalUpdateFormInputValues;
    onValidate?: ArrivalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArrivalUpdateForm(props: ArrivalUpdateFormProps): React.ReactElement;
