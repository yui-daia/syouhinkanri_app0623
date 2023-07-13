/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Search(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="161px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Search")}
      {...rest}
    >
      <Icon
        width="161px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 161, height: 16 }}
        paths={[
          {
            d: "M0 0L0 -0.5L-0.5 -0.5L-0.5 0L0 0ZM161 0L161.5 0L161.5 -0.5L161 -0.5L161 0ZM161 16L161 16.5L161.5 16.5L161.5 16L161 16ZM0 16L-0.5 16L-0.5 16.5L0 16.5L0 16ZM0 0.5L161 0.5L161 -0.5L0 -0.5L0 0.5ZM160.5 0L160.5 16L161.5 16L161.5 0L160.5 0ZM161 15.5L0 15.5L0 16.5L161 16.5L161 15.5ZM0.5 16L0.5 0L-0.5 0L-0.5 16L0.5 16Z",
            stroke: "rgba(0,0,0,0.73)",
            fillRule: "nonzero",
            strokeWidth: 0,
          },
          {
            d: "M0 0L161 0L161 16L0 16L0 0Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="20px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="153px"
        {...getOverrideProps(overrides, "search_botan")}
      >
        <View
          width="20px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,0.73)"
          {...getOverrideProps(overrides, "Rectangle 10")}
        ></View>
        <Icon
          width="8px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
          paths={[
            {
              d: "M7 4C7 5.65685 5.65685 7 4 7L4 9C6.76142 9 9 6.76142 9 4L7 4ZM4 7C2.34315 7 1 5.65685 1 4L-1 4C-1 6.76142 1.23858 9 4 9L4 7ZM1 4C1 2.34315 2.34315 1 4 1L4 -1C1.23858 -1 -1 1.23858 -1 4L1 4ZM4 1C5.65685 1 7 2.34315 7 4L9 4C9 1.23858 6.76142 -1 4 -1L4 1Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
              fill: "rgba(69,69,69,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3px"
          left="5px"
          {...getOverrideProps(overrides, "Ellipse 1")}
        ></Icon>
        <Icon
          width="4.81px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 3.0244140625,
            height: 3.740478515625,
          }}
          paths={[
            {
              d: "M0 0L4.81025 0L4.81025 -1L0 -1L0 0Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11px"
          left="11px"
          transformOrigin="top left"
          transform="rotate(51.04deg)"
          {...getOverrideProps(overrides, "Line 3")}
        ></Icon>
      </View>
    </View>
  );
}
