/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoticesOverridesProps = {
    Notices?: PrimitiveOverrideProps<ViewProps>;
    "\u7279\u8A18\u4E8B\u980515326"?: PrimitiveOverrideProps<FlexProps>;
    Table?: PrimitiveOverrideProps<FlexProps>;
    ".Row27295"?: PrimitiveOverrideProps<FlexProps>;
    Cell27315?: PrimitiveOverrideProps<FlexProps>;
    Content27316?: PrimitiveOverrideProps<FlexProps>;
    "\u7279\u8A18\u4E8B\u980527317"?: PrimitiveOverrideProps<TextProps>;
    Cell27318?: PrimitiveOverrideProps<FlexProps>;
    Content27319?: PrimitiveOverrideProps<FlexProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    ".Row27305"?: PrimitiveOverrideProps<FlexProps>;
    Cell27324?: PrimitiveOverrideProps<FlexProps>;
    Content27325?: PrimitiveOverrideProps<FlexProps>;
    "\u5F79\u5E2D\u30B3\u30E1\u30F3\u30C8"?: PrimitiveOverrideProps<TextProps>;
    Cell27330?: PrimitiveOverrideProps<FlexProps>;
    Content27331?: PrimitiveOverrideProps<FlexProps>;
    Cell27327?: PrimitiveOverrideProps<FlexProps>;
    Content27328?: PrimitiveOverrideProps<FlexProps>;
    "\u5F79\u5E2D\u62C5\u5F53\u8005\u540D"?: PrimitiveOverrideProps<TextProps>;
    "\u5C71\u57CE"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoticesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoticesOverridesProps | undefined | null;
}>;
export default function Notices(props: NoticesProps): React.ReactElement;
