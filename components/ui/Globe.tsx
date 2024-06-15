"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
import createGlobe, { COBEOptions } from "cobe";

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 8000,
    mapBrightness: 1.5,
    baseColor: [0.5, 0.5, 0.5],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [],
};

export default function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string;
    config?: COBEOptions;
}) {
    let width = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
        });

        setTimeout(() => (canvasRef.current!.style.opacity = "1"));
        return () => globe.destroy();
    }, []);

    return (
        <div
            className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}
        >
            <canvas
                className={cn(
                    "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                )}
                ref={canvasRef}
            />
        </div>
    );
}