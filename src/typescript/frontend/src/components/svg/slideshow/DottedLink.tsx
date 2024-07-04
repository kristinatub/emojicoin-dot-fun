import { type SVGMotionProps, motion } from "framer-motion";
import * as React from "react";
import { type Ref, forwardRef, memo } from "react";
import { AnimateDottedSVG } from "./AnimateDottedSVG";

const SvgComponent = (
  { width = 102, height = 132, ...props }: SVGMotionProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    ref={ref}
    {...props}
  >
    <AnimateDottedSVG d="M59.633 80.66c11.742-2.814 17.48-7.018 20.925-13.254l17.518-31.69c6.257-11.317 2.142-25.55-9.189-31.798C82.737.53 75.723.188 69.593 2.398M60.7 69.565a14.09 14.09 0 0 1-6.907-1.767l-.228-.108" />
    <AnimateDottedSVG d="m52.365 41.075 12.507-22.627a14.146 14.146 0 0 1 4.727-5.062M32.407 118.619a14.139 14.139 0 0 1-7.034-1.768c-6.857-3.78-9.353-12.402-5.561-19.25l16.634-30.1a14.097 14.097 0 0 1 4.518-4.923" />
    <AnimateDottedSVG d="M41.211 78.85c11.332 6.248 25.583 2.14 31.84-9.177l17.518-31.691c6.256-11.317 2.142-25.55-9.19-31.798-6.085-3.357-13.018-3.724-19.104-1.59A23.31 23.31 0 0 0 49.541 15.36L36.863 38.298l7.989 5.036 12.506-22.627c3.786-6.848 12.419-9.34 19.276-5.554 6.856 3.78 9.353 12.402 5.561 19.25l-16.634 30.1c-3.785 6.848-12.418 9.341-19.275 5.555l-5.075 8.791ZM29.5 130.447c12.361-1.37 19.2-6.994 22.966-13.804l12.678-22.936-8.305-5.239" />
    <AnimateDottedSVG d="m55.72 61.947-.442.764 5.511-9.55c-6.901-3.806-18.65-3.124-27.105.814M44.85 43.523l7.635-2.486M48.264 64.301l7.217-1.723M46.165 70.095l7.59-2.405M53.193 55.534l7.508-2.221M70.837 1.993 62.761 4.43M49.642 90.778l7.514-2.26M57.63 95.966l7.514-2.26M14.838 33.576c7.135 0 12.918-5.776 12.918-12.9 0-7.126-5.783-12.902-12.918-12.902-7.134 0-12.917 5.776-12.917 12.901s5.783 12.901 12.918 12.901Z" />
    <AnimateDottedSVG d="M15.724 7.774h3.197c7.135 0 12.918 5.776 12.918 12.901 0 7.126-5.783 12.901-12.918 12.901h-3.425M80.608 100.51h3.198c7.135 0 12.918 5.776 12.918 12.901 0 7.126-5.783 12.901-12.918 12.901h-3.425" />
    <AnimateDottedSVG d="M79.717 126.312c7.135 0 12.918-5.776 12.918-12.901s-5.783-12.901-12.918-12.901c-7.134 0-12.917 5.776-12.917 12.901s5.783 12.901 12.917 12.901ZM53.281 55.414c-11.33-6.248-25.582-2.14-31.839 9.177L3.924 96.281c-6.257 11.318-2.142 25.55 9.189 31.799 11.331 6.248 25.582 2.139 31.839-9.177l12.677-22.937-7.988-5.036-12.507 22.627c-3.785 6.848-12.418 9.341-19.275 5.554-6.857-3.781-9.353-12.402-5.561-19.25l16.633-30.1c3.786-6.848 12.419-9.341 19.276-5.555l5.074-8.792Z" />
  </motion.svg>
);

const ForwardRef = forwardRef(SvgComponent);
const DottedLink = memo(ForwardRef);
export default DottedLink;