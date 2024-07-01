import {
  Body,
  ColorBox,
  Container,
  Expenses,
  Footer,
  Head,
  HeadText,
  Income,
  RowText,
  StyledTdCat,
  StyledTdSum,
  StyledTdTotal,
  StyledTr,
} from './statisticsDataTable.styled';
import { colors } from './statiscticsColors';

const DataTable = ({ reduxData }) => {
  // Ensure reduxData and its properties are defined
  const categoriesSummary = reduxData && reduxData.categoriesSummary ? reduxData.categoriesSummary : [];
  const expenseSummary = reduxData && reduxData.expenseSummary ? reduxData.expenseSummary : 0;
  const incomeSummary = reduxData && reduxData.incomeSummary ? reduxData.incomeSummary : 0;

  return (
    <Container>
      <Head>
        <HeadText>
          <span>Category</span>
        </HeadText>
        <HeadText>
          <span>Sum</span>
        </HeadText>
      </Head>
      <Body>
        {categoriesSummary
          .filter(category => category.total !== 0)
          .map(category => {
            const boxColor = colors.find(color => color.name === category.name);
            return (
              <StyledTr key={category.name}>
                <StyledTdCat>
                  <ColorBox color={boxColor ? boxColor.color : '#000'} />
                  <RowText>
                    <span>{category.name}</span>
                    <StyledTdSum>{Math.abs(category.total).toFixed(2)}</StyledTdSum>
                  </RowText>
                </StyledTdCat>
              </StyledTr>
            );
          })}
      </Body>
      <Footer>
        <Expenses>
          <span>Expenses:</span>
          <StyledTdTotal className="expenses">
            {Math.abs(expenseSummary).toFixed(2)}
          </StyledTdTotal>
        </Expenses>
        <Income>
          <span>Income:</span>
          <StyledTdTotal className="income">
            {incomeSummary.toFixed(2)}
          </StyledTdTotal>
        </Income>
      </Footer>
    </Container>
  );
};

export default DataTable;
