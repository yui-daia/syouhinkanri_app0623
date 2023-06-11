/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeinformationOverridesProps = {
    Employeeinformation?: PrimitiveOverrideProps<FlexProps>;
    Table?: PrimitiveOverrideProps<FlexProps>;
    Col18510?: PrimitiveOverrideProps<FlexProps>;
    Cell27282?: PrimitiveOverrideProps<FlexProps>;
    Content27283?: PrimitiveOverrideProps<FlexProps>;
    "mail address"?: PrimitiveOverrideProps<TextProps>;
    Cell27285?: PrimitiveOverrideProps<FlexProps>;
    Content27286?: PrimitiveOverrideProps<FlexProps>;
    "\u540D\u524D"?: PrimitiveOverrideProps<TextProps>;
    Col18513?: PrimitiveOverrideProps<FlexProps>;
    Cell27288?: PrimitiveOverrideProps<FlexProps>;
    Content27289?: PrimitiveOverrideProps<FlexProps>;
    "xyu.saku@gmail.com"?: PrimitiveOverrideProps<TextProps>;
    Cell27291?: PrimitiveOverrideProps<FlexProps>;
    Content27292?: PrimitiveOverrideProps<FlexProps>;
    "\u4F50\u4E45\u672C\u3000\u6B63\u592A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EmployeeinformationProps = React.PropsWithChildren<Partial<FlexProps> & {
    email?: String;
} & {
    overrides?: EmployeeinformationOverridesProps | undefined | null;
}>;
export default function Employeeinformation(props: EmployeeinformationProps): React.ReactElement;
