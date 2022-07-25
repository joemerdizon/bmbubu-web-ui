export const mockTreeData = [
  {
    id: 1,
    text: 'Business Practice Management',
    icon: {
      type: 'fa-folder-plus',
      color: 'text-primary'
    },
    children: [
      {    
        id: 2,
        text: 'Warranties',
        icon:  {
          type: 'fa-folder-tree',
          color: 'text-dark'
        },
        children: [
          {           
            id: 2,
            text: 'Warranty Checklist',
            icon:  {
              type: 'fa-person-running',
              color: 'text-warning'
            },
            children: [
              {              
                id: 3,
                text: 'Clinic 1',
                icon:  {
                  type: 'fa-file-circle-check',
                  color: 'text-success'
                },
                checked: false,
                level: 3
              },
              {             
                id: 4,
                text: 'Clinic 2',
                icon:  {
                  type: 'fa-file-circle-xmark',
                  color: 'text-danger'
                },
                checked: false,
                level: 3
              },
              {              
                id: 5,
                text: 'Clinic 3',
                icon:  {
                  type: 'fa-file-circle-check',
                  color: 'text-success'
                },
                checked: false,
                level: 3
              }
            ],
            checked: false,
            showChildren: false,
            level: 2
          }
        ],
        checked: false,
        showChildren: false,
        level: 1
      }
    ],
    checked: false,
    showChildren: false,
    level: 0
  },
  { 
    id: 6,
    text: 'Change Management',
    children: [],
    icon:  {
      type: 'fa-folder-plus',
      color: 'text-primary'
    },
    checked: false,
    showChildren: false,
    level: 0
  },
  { 
    id: 7,
    text: 'Competency',
    children: [],
    icon:  {
      type: 'fa-folder-plus',
      color: 'text-primary'
    },
    checked: false,
    showChildren: false,
    level: 0
  },
  { 
    id: 8,
    text: 'Credentialing',
    children: [],
    icon:  {
      type: 'fa-folder-plus',
      color: 'text-primary'
    },
    checked: false,
    level: 0
  },
  {
    id: 9,
    text: 'Credentialing Management',
    children: [],
    icon:  {
      type: 'fa-folder-plus',
      color: 'text-primary'
    },
    checked: false,
    level: 0
  },
]