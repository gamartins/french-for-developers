import loadable from "@loadable/component";
import { useParams } from "react-router-dom";

const LoadableComponent = loadable(
  props => loadPage(props.page), {
  fallback: <div>Loading...</div>,
  cacheKey: props => props.page,

});

const loadPage = (page) => {
  return import(`!babel-loader!@mdx-js/loader!../pages/${page}.mdx`)
    .catch(() => import(`!babel-loader!@mdx-js/loader!../pages/error.mdx`))
}

export function Page() {
  const { page } = useParams()

  return <LoadableComponent page={page} />
}