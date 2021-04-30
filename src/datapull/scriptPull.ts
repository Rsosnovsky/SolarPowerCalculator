//this is the object to be edited
export const DATAB = 
    [
        {
            questionTitle: 'What Project are you working on?',
            type: 'select',
            questions:[
                {
                    title: 'Camper',
                    image: 'https://i.ibb.co/L0fD77n/camper-Van.png',
                    val: false
                },
                {
                    title: 'Boat',
                    image: 'https://i.ibb.co/VJxbgv2/boat.png',
                    val: false
                },
                {
                    title: 'Cabin',
                    image: 'https://i.ibb.co/CvJJ78P/cabin.png',
                    val: false
                },
                {
                    title: 'Other',
                    image: 'https://i.ibb.co/WfTMGTQ/otherPro.png',
                    val: false
                }
            ]
        },
        {
            questionTitle: 'Please select what you are looking to power and for what length of time',
            type: 'slide',
            questions:[
                {
                    title: 'Lights',
                    image: 'https://cdn2.iconfinder.com/data/icons/party-line-vol1-2/64/party_fairy_Light-512.png',
                    valU: 5,
                    valH: 1,
                    ACDC: true,
                    Watt: 15

                },
                {
                    title: 'Lights',
                    image: 'https://cdn2.iconfinder.com/data/icons/party-line-vol1-2/64/party_fairy_Light-512.png',
                    valU: 2,
                    valH: 3,
                    ACDC: false,
                    Watt: 25

                },
            ]
        }
    ]
;