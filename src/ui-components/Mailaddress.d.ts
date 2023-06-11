/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailaddressOverridesProps = {
    Mailaddress?: PrimitiveOverrideProps<ViewProps>;
    "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "xyu.saku@gmaiil.com"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MailaddressProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MailaddressOverridesProps | undefined | null;
}>;
export default function Mailaddress(props: MailaddressProps): React.ReactElement;
