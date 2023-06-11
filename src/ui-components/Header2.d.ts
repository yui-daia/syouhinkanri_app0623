/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Header2OverridesProps = {
    Header2?: PrimitiveOverrideProps<FlexProps>;
    Cell27383?: PrimitiveOverrideProps<FlexProps>;
    Content27384?: PrimitiveOverrideProps<FlexProps>;
    "\u6642\u9593"?: PrimitiveOverrideProps<TextProps>;
    Cell27389?: PrimitiveOverrideProps<FlexProps>;
    Content27390?: PrimitiveOverrideProps<FlexProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    Cell27386?: PrimitiveOverrideProps<FlexProps>;
    Content27387?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Header2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Header2OverridesProps | undefined | null;
}>;
export default function Header2(props: Header2Props): React.ReactElement;
