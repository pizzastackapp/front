import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

export type AdminLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  id: Scalars['uuid'];
  /** An array relationship */
  menu_items: Array<Menu>;
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "categories" */
export type CategoriesMenu_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  menu_items?: InputMaybe<Menu_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_items_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "menu" */
export type Menu = {
  __typename?: 'menu';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id: Scalars['uuid'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  ingredients?: Maybe<Scalars['String']>;
  price: Scalars['numeric'];
  title: Scalars['String'];
  weight?: Maybe<Scalars['numeric']>;
};

/** order by aggregate values of table "menu" */
export type Menu_Aggregate_Order_By = {
  avg?: InputMaybe<Menu_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Menu_Max_Order_By>;
  min?: InputMaybe<Menu_Min_Order_By>;
  stddev?: InputMaybe<Menu_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Menu_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Menu_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Menu_Sum_Order_By>;
  var_pop?: InputMaybe<Menu_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Menu_Var_Samp_Order_By>;
  variance?: InputMaybe<Menu_Variance_Order_By>;
};

/** order by avg() on columns of table "menu" */
export type Menu_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Bool_Exp>>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Menu_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** order by max() on columns of table "menu" */
export type Menu_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "menu" */
export type Menu_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "menu". */
export type Menu_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** order by stddev() on columns of table "menu" */
export type Menu_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "menu" */
export type Menu_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "menu" */
export type Menu_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "menu" */
export type Menu_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "menu" */
export type Menu_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "menu" */
export type Menu_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "menu" */
export type Menu_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** Login admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** columns and relationships of "settings" */
export type Settings = {
  __typename?: 'settings';
  drinks_category?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  drinks_category?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "settings". */
export type Settings_Order_By = {
  drinks_category?: InputMaybe<Order_By>;
};

/** select columns of table "settings" */
export enum Settings_Select_Column {
  /** column name */
  DrinksCategory = 'drinks_category'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, slug: string, title: string }> };

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, slug: string, title: string, menu_items: Array<{ __typename?: 'menu', id: any, image: string, ingredients?: string | null, price: any, title: string, weight?: any | null, category_id: any }> }> };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { __typename?: 'query_root', settings: Array<{ __typename?: 'settings', drinks_category?: any | null }> };


export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    id
    slug
    title
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetMenuDocument = gql`
    query GetMenu {
  categories {
    id
    slug
    title
    menu_items {
      id
      image
      ingredients
      price
      title
      weight
      category_id
    }
  }
}
    `;

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMenuQuery(baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, options);
      }
export function useGetMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, options);
        }
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export type GetMenuQueryResult = Apollo.QueryResult<GetMenuQuery, GetMenuQueryVariables>;
export const GetSettingsDocument = gql`
    query GetSettings {
  settings {
    drinks_category
  }
}
    `;

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
      }
export function useGetSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
        }
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>;
export type GetSettingsLazyQueryHookResult = ReturnType<typeof useGetSettingsLazyQuery>;
export type GetSettingsQueryResult = Apollo.QueryResult<GetSettingsQuery, GetSettingsQueryVariables>;