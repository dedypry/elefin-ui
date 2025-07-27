/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Fab, Stack } from "@mui/material";
import { ReactNode, useState } from "react";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carousel.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface CarouselProps {
  children: any;
  onSlideChange?: (index: number) => void;
}
export const Carousel = ({ children, onSlideChange }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  console.log(currentSlide);
  const ResizePlugin: KeenSliderPlugin = (slider) => {
    const observer = new ResizeObserver(function () {
      slider.update();
    });

    slider.on("created", () => {
      observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
      observer.unobserve(slider.container);
    });
  };
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 0,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        onSlideChange?.(slider.track.details.rel);
      },
      created(slider) {
        onSlideChange?.(slider.track.details.rel);
      },
    },
    [ResizePlugin]
  );
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "blue",
        width: `calc(100cap - 50px)`,
        "&:hover .carousel-nav": {
          opacity: 1,
          visibility: "visible",
        },
      }}
      //   className="box-ken"
    >
      <Box
        ref={sliderRef}
        className="keen-slider"
        sx={{
          height: "auto",
        }}
      >
        {children.map((element: ReactNode, i: number) => (
          <Box key={`carousel-${i}`} className="keen-slider__slide">
            {element}
          </Box>
        ))}
      </Box>
      {children.length > 1 ? (
        <Stack
          className="carousel-nav"
          flexDirection="row"
          justifyContent="space-between"
          position="absolute"
          sx={{
            zIndex: 50,
            width: "100%",
            px: 1,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            pointerEvents: "none", // supaya tidak ganggu interaksi saat hidden
          }}
        >
          <Fab
            size="small"
            onClick={() => instanceRef.current?.prev()}
            sx={{
              zIndex: 10,
            }}
          >
            <IconChevronLeft />
          </Fab>
          <Fab size="small" onClick={() => instanceRef.current?.next()}>
            <IconChevronRight />
          </Fab>
        </Stack>
      ) : null}
    </Box>
  );
};
