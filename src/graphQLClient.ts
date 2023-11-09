export const executeGraphQLQuery = async (storeUrl: string, storeToken: string, apiVersion: string, query: string, variables = {}) => {
    let apiUrl = `https://${storeUrl}/api/${apiVersion}/graphql.json`;

    const response = await fetch(apiUrl, {
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': storeToken
        },
        method: 'POST',
    });

    let responseBody = await response.json();
    let code = response.status;

    // throw error if occurred
    if (!response.ok) {
        console.error(`Storefront api graphql query failed with code ${code}`);
        return;
    }

    return responseBody;
};

export const simplifyImages = (products: any[]): any[] => {
    return products.map((product) => ({
        ...product,
        images: product.images.edges.map((edge: any) => edge.node ?? {}),
    }));
}