import { PageContainer } from 'common/layout/PageContainer';
import { Search } from 'pages/search';
import { SearchPageContainer } from 'pages/search/layout/SearchPageContainer';

export const App = () => (
  <PageContainer>
    <SearchPageContainer>
      <Search />
    </SearchPageContainer>
  </PageContainer>
);
