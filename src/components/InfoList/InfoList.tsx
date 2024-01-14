import { Typography } from '@mui/material';
import styled from 'styled-components';

interface InfoListItem {
  term: string;
  description?: string | JSX.Element | null;
  fullWidth?: boolean;
}

const StyledInfoList = styled.dl<{ columns?: number }>`
  margin-top: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: ${(p) => `repeat(${p.columns}, 1fr)`};
  word-break: break-all;
`;

const StyledDlContainer = styled.div`
  &.fullwidth {
    grid-column: 1 / -1;
  }
`;

export function InfoList({
  items,
  columns,
}: {
  items: InfoListItem[];
  columns?: number;
}) {
  return (
    items && (
      <StyledInfoList columns={columns}>
        {items.map(({ term, description, fullWidth }) => {
          return (
            <StyledDlContainer
              key={term}
              className={fullWidth ? 'fullwidth' : undefined}
            >
              <Typography
                component="dt"
                sx={{ color: ' #65636d', lineHeight: 2 }}
              >
                {term}
              </Typography>
              <Typography component="dt">{description ?? '-'}</Typography>
            </StyledDlContainer>
          );
        })}
      </StyledInfoList>
    )
  );
}
