import { createSlice } from '@reduxjs/toolkit'

export const responsesSlice = createSlice({
    name: 'responses',
    initialState: {
        responses:[
            {
                "RSid": 1,
                "RSprogramId": 3,
                "RSuserId": 1,
                "RSdescription": "תודה ענקיתת! היה יוצא  \r\nמן הכלל, כולן כל כך \r\nנהנו, כמה פרגונים\r\nקיבלתי אח\"כ, כולן מאד \r\nהדגישו את האוירה, \r\nוהחויה המגבשת, ואמרו \r\nשזה נתן להן הרבה כח!\r\nשוב- תודה תודה!!!\"\r",
                "RSshown": true
            },
            {
                "RSid": 2,
                "RSprogramId": 3,
                "RSuserId": 2,
                "RSdescription": "\"היה מושששששששלם! \r\nאין מילים, כולן בלי יוצא \r\nמן הכלל שתפו פעולה\r\nהיתה אווירה כיפית מצד \r\nאחד, ומהצד השני- המסר \r\nחד וקולע שדבר לכולן\r\nמחכים לתכנית הבאה...\r\n)יש לי בת עוד שנתיים",
                "RSshown": true
            }

        ]
    },
    reducers: {
        setResponses: (state, action) => {
            
            state.responses = action.payload
        },
        clearResponses: (state) => {
            state.responses = []
        },
    },
   
})
export const { setResponses } = responsesSlice.actions

export default responsesSlice.reducer