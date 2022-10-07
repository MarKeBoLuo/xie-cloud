import React from 'react'
import { remote } from 'electron'
import fs from 'fs'
interface Props {}
interface State {
    txtFileData: string
}

export default class ReadTxt extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            txtFileData: ''
        }
    }
    public readTxtFileData = async () => {
        const result = await remote.dialog.showOpenDialog({
            title: '请选择.txt文件',
            filters: [
                {
                    name: 'txt',
                    extensions: ['txt']
                }
            ]
        })
        fs.readFile(result.filePaths[0], 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                this.setState({
                    txtFileData: data.replace(/\n|\r\n/g, '<br/>')
                })
            }
        })
    }
    public render = (): JSX.Element => {
        return (
            <section style={{padding: 20}}>
                <button onClick={this.readTxtFileData}>
                    读取一个txt文件的内容
                </button>
                <div dangerouslySetInnerHTML={{__html: this.state.txtFileData}}></div>
                <a type='link' href='/'>返回App页面</a>
            </section>
        )
    }
}
