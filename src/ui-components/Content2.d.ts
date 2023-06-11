/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Content2OverridesProps = {
    Content2?: PrimitiveOverrideProps<FlexProps>;
    Cell27392?: PrimitiveOverrideProps<FlexProps>;
    Content27393?: PrimitiveOverrideProps<FlexProps>;
    "9:00-11:30"?: PrimitiveOverrideProps<TextProps>;
    Cell27398?: PrimitiveOverrideProps<FlexProps>;
    Content27399?: PrimitiveOverrideProps<FlexProps>;
    "\u7A93\u53E3\u696D\u52D9"?: PrimitiveOverrideProps<TextProps>;
    Cell27395?: PrimitiveOverrideProps<FlexProps>;
    Content27396?: PrimitiveOverrideProps<FlexProps>;
    "\u9078\u629E"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Content2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Content2OverridesProps | undefined | null;
}>;
export default function Content2(props: Content2Props): React.ReactElement;
