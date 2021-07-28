export let ADD_STEP= "add_step"
export let UPDATE_STATUS= "update_status_of_timeline"
export let ADD_METADATA = "add_metadata"
export let RESET= "reset"
export let initialSteps= [
        {
            heading: 'Personal Info',
            completed: false,
            optional: false
        },
        {
            heading: 'Education',
            completed: false,
            optional: false
        },
        {
            heading: 'Experience',
            completed: false,
            optional: false
        },
        {
            heading: 'Skills',
            completed: false,
            optional: false
        },
        {
            heading: 'Scholaristic Achievement',
            completed: false,
            optional: true,
            skipped: false
        }
]
export let initialMetaData = {
    'Personal Info': {
        fname: '',
        lname: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        phone: ''
    },
    'Education': [],
    'Experience':[]
}
export const config = {
    toolbar: {
        items: [
            'bold',
            'italic',
            '|',
            'bulletedList',
            'numberedList',
            'indent',
            'outdent',
            '|',
            'heading',
            '|',
            'undo',
            'redo'
        ]
    }
}