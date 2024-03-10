using Avalonia.Controls.Primitives;

namespace GroupBox.Avalonia.Controls;
/// <summary>
/// <para>A thin wrapper for <see cref="HeaderedContentControl"/> intended for recreations of GroupBox and GroupBox-like Controls.</para>
/// From Microsoft's documentation: This Control displays a frame around a <i>group</i> of controls with an optional caption.<br/>
/// </summary>
public partial class GroupBox : HeaderedContentControl
{
    public GroupBox() => InitializeComponent();
}
