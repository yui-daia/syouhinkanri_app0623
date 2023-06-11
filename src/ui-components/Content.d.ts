/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentOverridesProps = {
    Content?: PrimitiveOverrideProps<FlexProps>;
    Cell27234?: PrimitiveOverrideProps<FlexProps>;
    Content27235?: PrimitiveOverrideProps<FlexProps>;
    "2023-05-11"?: PrimitiveOverrideProps<TextProps>;
    Cell27243?: PrimitiveOverrideProps<FlexProps>;
    Content27244?: PrimitiveOverrideProps<FlexProps>;
    "\u672A"?: PrimitiveOverrideProps<TextProps>;
    Cell27240?: PrimitiveOverrideProps<FlexProps>;
    Content27241?: PrimitiveOverrideProps<FlexProps>;
    Cell27237?: PrimitiveOverrideProps<FlexProps>;
    Content27238?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContentOverridesProps | undefined | null;
}>;
export default function Content(props: ContentProps): React.ReactElement;
