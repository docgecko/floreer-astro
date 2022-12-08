import sanityClient from '@lib/sanityClient';

interface Page {
  page_title: string;
  title: string;
  hero: {
    title: string;
    description: string;
    image: {
      url: string;
      owner_name: string;
      owner_url: string;
      source_name: string;
      source_url: string;
    }
  }
  section: {
    header: {
      title: string;
    },
    content: {
      description: string;
    }
  }[]
}

export async function getPage(pageTitle: string): Promise<Page> {
  const query = `*[_type == "page" && page_title == "Home"][0]{
    page_title,
    title,
    hero-> {
      'title': hero_title,
      'description': hero_description,
      'image': hero_image->image.asset-> {
        url,
        owner_name,
        owner_url,
        source_name,
        source_url
      }
    },
    'section': sections[]-> {
      'header': section[0]-> {
        'title': header
      },
      'content': section[1]-> {
        'description': body
      }
    }
  }`;
  const data = await sanityClient.fetch(query);
  // console.log({ data });
  return data;
}

export const getServices = async () => {
  const query = `*[ _type == "service" && category == true && (!(_id match "drafts")) ]{
    title,
    description,
    category,
    'hero_image_url': hero->hero_image->image.asset->url,
    'hero_image_owner_name': hero->hero_image->owner_name,
    'hero_image_owner_url': hero->hero_image->owner_url,
    'hero_image_source_name': hero->hero_image->source_name,
    'hero_image_source_url': hero->hero_image->source_url,
    'subservices': service[]->{
      category,
      title
    },
    'slug': slug.current
  } | order(title)`;
  const data = await sanityClient.fetch(query);
  // console.log({ data });
  return data;
}

export async function getCaseStudies(featured: boolean): Promise<any> {
  const query = `*[_type == "case_study" && featured == ${featured} && (!(_id match "drafts"))]{
    challenge,
    description,
    featured,
    hero-> {
      hero_description,
      hero_image-> {
        "": image {
          "": asset-> {
            url
          }
        }
      },
      hero_title
    },
    industries[]-> {
      category,
      industries[]->,
      name
    },
    location,
    partners[]-> {
      image-> {
        "": image {
          "": asset-> {
            url
          }
        }
      },
      name
    },
    results,
    services[]->{
      category,
      title
    },
    'slug': slug.current,
    solution,
    title
  }`;
  const data = await sanityClient.fetch(query);
  // console.log({ data });
  return data;
}

export interface Client {
  _id: string;
  name: string;
  image: {
    url: string;
  };
}

export async function getClients(): Promise<Client[]> {
  const query = `*[_type == "client" && (!(_id match "drafts"))] {
    _id,
    name,
    "": image-> {
      image {
        "": asset-> {
          url
        }
      }
    }
  } | order(name)`;

  let data: Client[] = await sanityClient.fetch(query);
  return data;
}

export async function getClientsByLastId(lastId: string) {
  let paginate = "";
  let data: Client[] = [];

  const query = `*[_type == "client" && (!(_id match "drafts"))${paginate}] | order(name) [0...8] {
    _id,
    name,
    "": image-> {
      image {
        "": asset-> {
          url
        }
      }
    }
  }`;

  if (lastId === "") {
    console.log({ query });
    data = await sanityClient.fetch(query);
    console.log("getClients data: ", data);
  } else {
    paginate = ` && name > "${lastId}"`;
    console.log({ query });
    data = await sanityClient.fetch(query);
    console.log("getClients data: ", data);
  }

  console.log("data: ", data);

  if (data.length > 0) {
    lastId = data[data.length - 1].name;
  } else {
    lastId = "";
  }
  console.log({ data, lastId });
  return { data, lastId };
}

export interface About {
  name: string;
  slug: string;
  image: {
    url: string;
  };
}

export async function getAbouts(): Promise<About[]> {
  const query = `*[_type == "about"] | order(name) {
    name,
    "slug": slug.current,
    "image": image-> {
      "": image {
        "url": asset->url
      }
    }
  }`;

  let data: About[] = await sanityClient.fetch(query);
  return data;
}