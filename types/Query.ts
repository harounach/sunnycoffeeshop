export default interface Query {
  page?: number | string | undefined;
  perpage?: number | string | undefined;
  order?: number | string | undefined;
  q?: string | undefined;
  pages?: number | string | undefined;
}
