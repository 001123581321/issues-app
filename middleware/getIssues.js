export default async function ({store}) {
  await store.dispatch({
    type: 'issues/getIssuesFromGithub',
    state: 'open',
    page: 1,
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
