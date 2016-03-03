export const articles = [
    {
        title: 'First article',
        body: 'First body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et interdum ligula, eget rutrum leo. Sed bibendum nulla eget ex scelerisque ultrices. Nullam malesuada, sapien in fringilla imperdiet, est magna aliquam nisl, ac porttitor leo diam non lectus. Duis id diam sapien. Vivamus vitae lectus et nulla lacinia bibendum eu vel felis. Phasellus convallis, felis vitae hendrerit varius, est lectus elementum ex, eu sollicitudin ex orci vel dui. Nunc eu consectetur augue. Mauris tincidunt vitae libero sit amet tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed laoreet metus ac erat commodo consectetur. Nullam vel aliquam tellus. Proin pharetra diam justo, non finibus dolor vulputate id. Ut at urna nulla. Nullam elementum erat eu sollicitudin tincidunt. Sed a erat ut justo tincidunt malesuada vel ut risus.',
        id: 1,
        comments: [1,2]
    },{
        title: 'Second article',
        body: 'Second body text. Duis consectetur commodo arcu ac dignissim. Vivamus quis ante eget dui imperdiet molestie ut eu justo. Nam non tempor urna, a pulvinar leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec posuere quam, sit amet euismod enim. Suspendisse nisi ante, molestie feugiat bibendum quis, venenatis sit amet mi. Nulla elit libero, vestibulum vel quam eget, consectetur viverra mauris. Pellentesque sed velit a sem posuere malesuada nec a sem. Suspendisse aliquam velit at convallis pretium.',
        comments: [3],
        id: 2
    },{
        title: 'Third article',
        body: 'Third body text. Nunc sodales vehicula ante, imperdiet aliquam augue dapibus vel. Aliquam vel ante tincidunt, scelerisque ligula sit amet, tincidunt enim. Phasellus lectus lacus, finibus non leo vel, egestas maximus nisl. Etiam vitae iaculis magna, vel aliquet tortor. Duis mollis lobortis arcu vehicula dignissim. In maximus in augue ac tristique. In eu maximus urna.',
        id: 3
    },{
        title: 'Fourth article',
        body: 'Fourth body text. Aliquam vitae lectus et mauris efficitur dictum. Nulla commodo orci id dictum blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed mi quam. Vivamus ornare odio et tempus pulvinar. Nulla facilisi. Aenean dapibus metus nec porttitor mollis.',
        id: 4
    },{
        title: 'Fifth article, missing body',
        id: 5
    },{
        body: 'Sixth article has no title, just body text. Nulla commodo orci id dictum blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed mi quam. Vivamus ornare odio et tempus pulvinar. Nulla facilisi. Aenean dapibus metus nec porttitor mollis.',
        id: 6
    }
];

export const comments = [
    {text: 'Hello, very interesting article.', id: 1},
    {text: 'Thanks for sharing.', id: 2},
    {text: 'Some new comment. Suspendisse rhoncus sed eros ac mollis.', id: 3}
];