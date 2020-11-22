export default async function ({store, route, redirect}) {
  const firstPage = 1
  const currentPage = route.query.page

  if(!currentPage) {
    const fullPath = route.fullPath
    redirect(`${fullPath}${fullPath.includes('?') ? '&' : '?'}page=${firstPage}`)
  }

  await store.dispatch({
    type: 'issues/getIssuesFromGithub',
    state: 'open',
    page: currentPage,
    per_page: 10,
  })

  // const response = await octokit.graphql(
  //   `query ($login: String!) {
  //   organization(login: $login) {
  //     repositories(privacy: PRIVATE) {
  //       totalCount
  //     }
  //   }
  // }`,
  //   {
  //     login: 'octokit'
  //   }
  // )
}
