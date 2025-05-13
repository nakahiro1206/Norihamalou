import { useSprings, SpringValue } from "@react-spring/web";
declare module "@react-spring/web" {
    const animated = {
        children: React.ReactNode,
        ...reactSpring.animated,
    };
}

// https://github.com/pmndrs/react-spring/issues/2358