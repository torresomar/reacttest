'use strict';

class Basic extends React.Component {
    constructor() {
        super()
        this.state = {files: []}
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    onCancel() {
        this.setState({
            files: []
        });
    }

    render() {
        return (
            <section>
                <div className="dropzone">
                    <DropZone
                        onDrop={this.onDrop.bind(this)}
                        onFileDialogCancel={this.onCancel.bind(this)}
                    >
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </DropZone>
                </div>
                <aside>
                    <h2>Dropped files</h2>
                    <ul>
                        {
                            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        );
    }
}

const container = document.querySelector('#react-container');
ReactDOM.render(<Basic />, container);
