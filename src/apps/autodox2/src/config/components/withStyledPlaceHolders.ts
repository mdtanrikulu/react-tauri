import { ELEMENT_H1, ELEMENT_PARAGRAPH, withPlaceholders } from '@udecode/plate'
import {ELEMENT_NUMBERED} from "./numbered/numbered";

export const withStyledPlaceHolders = (components: any) =>
  withPlaceholders(components, [
      {
      key: ELEMENT_NUMBERED,
      placeholder: 'Type a numbered list element',
      hideOnBlur: true,
    },
    {
      key: ELEMENT_PARAGRAPH,
      placeholder: 'Type a paragraph',
      hideOnBlur: true,
    },
    {
      key: ELEMENT_H1,
      placeholder: 'Untitled',
      hideOnBlur: false,
    },
  ])
