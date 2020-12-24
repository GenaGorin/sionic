import { StyleSheet } from 'react-native';

export const navbar = StyleSheet.create({
    activeIcons: {
        width: 20,
        height: 20,
        tintColor: '#FF2988',
    },
    inactiveIcons: {
        width: 20,
        height: 20,
        tintColor: '#ECF1Fd',
    }
});

export const screenHeader = StyleSheet.create({
    headerWrap: {
        alignItems: 'center',
        marginTop :15,
        borderBottomColor: '#ECF1Fd',
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    header: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
    }
});

export const container =StyleSheet.create({
    containerWrap: {
        marginTop: 10,
    },
    container: {
        alignItems: 'center',
    },
    row: {
        width: '90%',
    }
});

export const buttons = StyleSheet.create({
    mainButton: {
        width: '100%',
        backgroundColor: '#FF2988',
        height: 50,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 30
    }
})


export const table = StyleSheet.create({
    cartHeader: {
        flexDirection: 'row',
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'space-around'
    },
    columnName: {
        justifyContent: 'center',
        width: 120,
    },
    columnOther: {
        justifyContent: 'center',
        width: 50,
        alignItems: 'center'
    }
});

export const close = StyleSheet.create({
    closeWindow: {
        position: 'absolute',
        right: 0, 
        top: 0, 
        zIndex: 1
    }
});
