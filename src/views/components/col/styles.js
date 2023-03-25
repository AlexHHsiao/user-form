import styled from "@emotion/styled";
import {css} from "@emotion/react";

const size1 = css`
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
`;
const size2 = css`
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
`;
const size3 = css`
  flex: 0 0 25%;
  max-width: 25%;
`;
const size4 = css`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
`;
const size5 = css`
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
`;
const size6 = css`
  flex: 0 0 50%;
  max-width: 50%;
`;
const size7 = css`
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
`;
const size8 = css`
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
`;
const size9 = css`
  flex: 0 0 75%;
  max-width: 75%;
`;
const size10 = css`
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
`;
const size11 = css`
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
`;
const size12 = css`
  flex: 0 0 100%;
  max-width: 100%;
`;

const sizeMap = {
    1: size1,
    2: size2,
    3: size3,
    4: size4,
    5: size5,
    6: size6,
    7: size7,
    8: size8,
    9: size9,
    10: size10,
    11: size11,
    12: size12,
}

export const StyledCol = styled.div`
  flex: 1 1 0px;
  box-sizing: border-box;
  ${({sm}) => (
          sm && sizeMap[sm]
  )};

  @media screen and (min-width: 40em) {
    ${({md}) => (
            md && sizeMap[md]
    )};
  }
`;