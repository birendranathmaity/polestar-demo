export const GET_HOMEPAGE = `
  query HomePage {
  page(filter: {id: {eq: "187398435"}, label: {}}) {
    id
    label
    sections {
      ... on HeroSectionRecord {
        id
        heroTitle
        heroSubtitle
        heroImage {
          url
        }
        buttons {
          label
          url
        }
      }
    }
  }
}
`;
export const GET_CARDS = `
  query HomePage {
  page(filter: {id: {eq: "187398435"}, label: {}}) {
    id
    label
    sections {
      ... on CtaButtonWithImageRecord {
        id
        title
        subtitle
        label
        url
        image {
          url
        }
}
        
    }
      
  }
}
`;
export const PROMO = `
query HomePage { page(filter: {id: {eq: "187398435"}, label: {}}) { id label sections { ... on CtaButtonWithImageRecord { id title label url image { url } } } }}

`;
export const GET_P2 = `
query Polestr2 {
  product(filter: {id: {eq: "DvMduP0HSFOlbO3eQTvZlw"}, title: {}}) {
    id
    title
    sections {
      ... on HeroSectionRecord {
        id
        heroTitle
        heroImage {
          url
        }
      }
      ... on VideoSectionRecord {
        id
        videoHeader
        videolink
        linklabel
        link
      }
    }
  }
}

`;
