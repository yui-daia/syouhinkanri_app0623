/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchOverridesProps = {
    Search?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<IconProps>;
    search_botan?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchOverridesProps | undefined | null;
}>;
export default function Search(props: SearchProps): React.ReactElement;
