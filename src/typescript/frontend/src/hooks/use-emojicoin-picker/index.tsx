import React from "react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { useThemeContext } from "context/theme-context";
import useTooltip from "hooks/use-tooltip";
import { StyledEmojiPickerWrapper } from "./styled";
import { getTooltipStyles } from "./theme";
import { type useEmojicoinPickerProps } from "./types";

const useEmojicoinPicker = ({
  onEmojiClick,
  placement = "auto",
  autoFocusSearch = true,
  width = 350,
}: useEmojicoinPickerProps) => {
  const { theme } = useThemeContext();

  const { targetRef, tooltip, targetElement } = useTooltip(
    <StyledEmojiPickerWrapper>
      <EmojiPicker
        searchPlaceholder=""
        onEmojiClick={onEmojiClick}
        theme={Theme.DARK}
        skinTonesDisabled
        lazyLoadEmojis
        autoFocusSearch={autoFocusSearch}
        width={width}
      />
    </StyledEmojiPickerWrapper>,
    {
      placement: placement,
      customStyles: getTooltipStyles(theme),
      trigger: "click",
      arrowBorderColor: "darkGray",
    }
  );

  return { targetRef, tooltip, targetElement };
};
export default useEmojicoinPicker;
