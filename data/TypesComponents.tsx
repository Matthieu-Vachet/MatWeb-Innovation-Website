import { ReactElement } from "react";
import { HTMLMotionProps } from "framer-motion";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                   AnimatedElement.tsx                      */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export type AnimatedElementProps = {
    children: React.ReactNode;
    delay: number;
    duration?: number;
    className?: string;
};

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      BlurIn.tsx                            */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface BlurIntProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
    delay?: number;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     BoxReveal.tsx                          */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface BoxRevealProps {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    boxColor?: string;
    duration?: number;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                 CanvasRevealEffect.tsx                     */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface CanvasRevealEffectProps {
    /**
     * 0.1 - slower
     * 1.0 - faster
     */
    animationSpeed?: number;
    opacities?: number[];
    colors?: number[][];
    containerClassName?: string;
    dotSize?: number;
    showGradient?: boolean;
}

export interface DotMatrixProps {
    colors?: number[][];
    opacities?: number[];
    totalSize?: number;
    dotSize?: number;
    shader?: string;
    center?: ("x" | "y")[];
}

export type Uniforms = {
    [key: string]: {
        value: number[] | number[][] | number;
        type: string;
    };
};

export interface ShaderMaterialProps {
    source: string;
    hovered?: boolean;
    maxFps?: number;
    uniforms: Uniforms;
}

export interface ShaderProps {
    source: string;
    uniforms: {
        [key: string]: {
            value: number[] | number[][] | number;
            type: string;
        };
    };
    maxFps?: number;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    GaugeCircle.tsx                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface GaugeCircleProps {
    max: number;
    value: number;
    min: number;
    gaugePrimaryColor: string;
    gaugeSecondaryColor: string;
    className?: string;
    label?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    HoverEffect.tsx                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface HoverEffectProps {
    items: {
        title: string;
        subtitle: string;
        description: string;
        link?: string;
        icon?: any;
    }[];
    className?: string;
}

export interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}

export interface CardIconsProps {
    className?: string;
    children: React.ReactNode;
}

export interface CardSubtitleProps {
    className?: string;
    children: React.ReactNode;
}

export interface CardDescriptionProps {
    className?: string;
    children: React.ReactNode;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      Marquee.tsx                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                  MarqueeHorizontal.tsx                     */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    MovingBorder.tsx                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface ButtonProps {
    borderRadius?: string;
    children: React.ReactNode;
    as?: any;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
    [key: string]: any;
}

export interface MovingBorderProps {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
    [key: string]: any;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    Particles.tsx                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface MousePositionProps {
    x: number;
    y: number;
}

export interface ParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    size?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
}

export type CircleProps = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
};

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     PinContainer.tsx                       */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface PinContainerProps {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
}

export interface PinPerspectiveProps {
    title?: string;
    href?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    ShineBorder.tsx                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export type TColorProp = string | string[];

export interface ShineBorderProps {
    borderRadius?: number;
    borderWidth?: number;
    duration?: number;
    color?: TColorProp;
    className?: string;
    children: React.ReactNode;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    ShootingStar.tsx                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

export interface ShootingStarsProps {
    minSpeed?: number;
    maxSpeed?: number;
    minDelay?: number;
    maxDelay?: number;
    starColor?: string;
    trailColor?: string;
    starWidth?: number;
    starHeight?: number;
    className?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    SparkleText.tsx                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface SparkleProps {
    id: string;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
    lifespan: number;
}

export interface SparklesTextProps {
    /**
     * @default <div />
     * @type ReactElement
     * @description
     * The component to be rendered as the text
     * */
    as?: ReactElement;

    /**
     * @default ""
     * @type string
     * @description
     * The className of the text
     */
    className?: string;

    /**
     * @required
     * @type string
     * @description
     * The text to be displayed
     * */
    text: string;

    /**
     * @default 10
     * @type number
     * @description
     * The count of sparkles
     * */
    sparklesCount?: number;

    /**
     * @default "{first: '#A07CFE', second: '#FE8FB5'}"
     * @type string
     * @description
     * The colors of the sparkles
     * */
    colors?: {
        first: string;
        second: string;
    };
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                   StarsBackground.tsx                      */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface StarProps {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number | null;
}

export interface StarsBackgroundProps {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minTwinkleSpeed?: number;
    maxTwinkleSpeed?: number;
    className?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     WordRotate.tsx                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface WordRotateProps {
    words: string[];
    duration?: number;
    framerProps?: HTMLMotionProps<"h1">;
    className?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    ContactForm.tsx                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export type Email = string;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type SubmitEvent = React.FormEvent<HTMLFormElement>;

export interface LabelInputContainerProps {
    children: React.ReactNode;
    className?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     Container.tsx                          */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                       Feature.tsx                          */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export type FeaturesProps = {
    children: React.ReactNode;
    color: string;
    colorDark: string;
};

export type MainFeatureProps = {
    text?: React.ReactNode;
    title: React.ReactNode;
    paragraphes?: React.ReactNode;
    imageSize?: "small" | "large";
};

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                   FeaturesSection.tsx                      */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface FeaturesSectionProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     MagicButton.tsx                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface MagicButtonProps {
    title: string;
    icon?: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    NumberTicker.tsx                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface NumberTickerProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
    delay?: number; // delay in s
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      Elypse.tsx                       */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface ElypseProps {
    className?: string;
    stopColor1?: string;
    stopColor2?: string;
    offset1?: number;
    offset2?: number;
}
