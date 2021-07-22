import React from "react";

class HeaderTitle extends React.Component {
    render() {
        const ContentTitle = this.props.title;
        return (
            <section class="content-title">
                <div class="container">
                    <h1>{ContentTitle ? ContentTitle : "Página"}</h1>
                </div>
            </section>
        )
    }
}

export default HeaderTitle;