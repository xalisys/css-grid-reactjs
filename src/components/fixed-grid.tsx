import "simplebar/dist/simplebar.min.css";
import React, { CSSProperties } from "react";
import { GridProps } from "./types";
import SimpleBar from "simplebar-react";
import { Grid } from "./grid";

type FixedGridProps = GridProps & { autoHideScrollbar?: boolean; scrollbarStyles?: CSSProperties };
/**
 * Fixed size grid shows crossbars incase of content overflow.
 */
export const FixedGrid = (props: FixedGridProps) => {
    const { children, scrollbarStyles, autoHideScrollbar = true, ...rest } = props;

    return (
        <SimpleBar style={scrollbarStyles} autoHide={autoHideScrollbar}>
            <div>
                <Grid {...rest}>{children}</Grid>
            </div>
        </SimpleBar>
    );
};
